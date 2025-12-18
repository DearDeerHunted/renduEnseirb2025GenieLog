Future<void> loadClient(String clientName) async {
  log.info('${'=== loadClient ==='.padRight(20)} (client: $clientName)');
  
  _isReady = false;
  setResponse("⏳ Chargement du client $clientName...");

  try {

    // Read AI models and API keys from .env
    // add your api keys in the .env file in root (API_KEY_X=...)
    List<String> keys = _getFromEnv("API_KEY");
    List<String> models = _getFromEnv("MODEL");

    final firstModel = models.removeAt(0);
    final firstKey = keys.removeAt(0);

    _client = Client(
      clientName: clientName,
      firstModel: firstModel,
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

List<String> _getFromEnv(String prefix) {
  final uniqueValues = <String>{};
  List<String> results = dotenv.env.entries
    .where((entry) => entry.key.startsWith(prefix))
    .map((entry) => entry.value)
    .where((value) => value.isNotEmpty && uniqueValues.add(value))
    .toList();
  if (results.isEmpty) {
    throw Exception("$prefix manquante dans .env");
  }
  return results;
}