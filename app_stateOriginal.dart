Future<void> loadClient(String clientName) async {
  log.info('${'=== loadClient ==='.padRight(20)} (client: $clientName)');
  
  _isReady = false;
  setResponse("⏳ Chargement du client $clientName...");

  try {

    // List of AI models to try
    List<String> models = ["gemini-2.5-flash", "gemini-2.5-flash-lite"].toList();
    
    // Read API keys from .env
    // add your api keys in the .env file in root (API_KEY_X=...)
    final seenKeys = <String>{};
    List<String> keys = dotenv.env.entries
      .where((entry) => entry.key.startsWith("API_KEY"))
      .map((entry) => entry.value)
      .where((value) => value.isNotEmpty && seenKeys.add(value))
      .toList();
    if (keys.isEmpty) {
      throw Exception("API_KEY manquante dans .env");
    }

    _server = await createMcpServer();
    String systemPrompt = await getSystemPrompt(clientName);
    final firstModel = models.removeAt(0);
    final firstKey = keys.removeAt(0);
    
    final gga.GenerativeModel model = gga.GenerativeModel(
      model: firstModel,
      apiKey: firstKey,
      systemInstruction: gga.Content.system(systemPrompt),
    );

    _client = Client(
      model: model,
      systemPromptBuilder: () async => await getSystemPrompt(clientName),
      firstModel: firstModel,
      server: _server,
      fallbackModels: models,
      fallbackApiKeys: keys,
      apiKey: firstKey
    );
    _currentClient = clientName;

    _isReady = true;
    setResponse("Client $clientName prêt");

  } catch (e) {
    setResponse("Erreur lors du chargement du client");
    log.warning("$e");
  }
}

Future<String> getSystemPrompt(String clientName) async {
  log.info('=== getSystemPrompt ==='.padRight(20));
  switch (clientName) {
    case "general":
      return getGeneralSystemPrompt();
    case "smart":
      return getSmartSystemPrompt();
    case "Exemple":
      try {
        String info = await _server.callTool('get_current_location', {});
        return getExempleSystemPrompt(info);
      } catch (e) {
        return getExempleSystemPrompt("Error: $e");
      }
    default:
      throw Exception("Unknown client type: $clientName");
  }
}