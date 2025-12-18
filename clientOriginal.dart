class Client {
  gga.GenerativeModel _model;
  Future<String> Function() systemPromptBuilder;
  final LocalMcpServer server;
  final List<String> fallbackModels;
  final List<String> fallbackApiKeys;
  String _currentModelName;
  String _currentApiKey;

  final List<gga.Content> convHistory = [];
  static final int historySize = 500;

  Client({
    required gga.GenerativeModel model,
    required this.systemPromptBuilder,
    required String firstModel,
    required this.server,
    required this.fallbackModels,
    required this.fallbackApiKeys,
    required String apiKey,
  }) : _model = model, _currentModelName = firstModel, _currentApiKey = apiKey;

  void _refreshModel() async {
    _model = gga.GenerativeModel(
      model: _currentModelName,
      apiKey: _currentApiKey,
      systemInstruction: gga.Content.system(await systemPromptBuilder()), 
    );
  }
}