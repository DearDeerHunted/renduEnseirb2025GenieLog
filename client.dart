class Client {
  final Future<LocalMcpServer> _server = createMcpServer();

  final List<String> fallbackModels;
  final List<String> fallbackApiKeys;

  gga.GenerativeModel? _model;
  String _currentModelName;
  String _currentApiKey;
  final String _clientName;

  final List<gga.Content> convHistory = [];
  static final int historySize = 500;

  Client({
    required String clientName,
    required this.fallbackModels,
    required this.fallbackApiKeys,
  }) :
  _clientName = clientName,
  _currentModelName = fallbackModels.removeAt(0),
  _currentApiKey = fallbackApiKeys.removeAt(0)
  {
    _refreshModel();
  }

  void _refreshModel() async {
    _model = gga.GenerativeModel(
      model: _currentModelName,
      apiKey: _currentApiKey,
      systemInstruction: gga.Content.system(await getSystemPrompt()), 
    );
  }

  Future<String> getSystemPrompt() async {
    log.info('=== getSystemPrompt ==='.padRight(20));

    final serverInstance = await _server;
    
    switch (_clientName) {
      case "general":
        return getGeneralSystemPrompt();
      case "smart":
        return getSmartSystemPrompt();
      case "Exemple":
        try {
          String info = await serverInstance.callTool('get_current_location', {});
          return getExempleSystemPrompt(info);
        } catch (e) {
          return getExempleSystemPrompt("Error: $e");
        }
      default:
        throw Exception("Unknown client type: $_clientName");
    }
  }
}