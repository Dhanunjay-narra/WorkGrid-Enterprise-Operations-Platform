export class AiAgentConversationSessionRestController {
  public async create(req: any, res: any): Promise<void> {
    res.status(201).json({
      success: true,
      entity: "AiAgentConversationSession",
      id: "ai_rest_" + Math.random().toString(36).substring(2, 9),
      payload: req.body
    });
  }

  public async get(req: any, res: any): Promise<void> {
    res.json({
      success: true,
      entity: "AiAgentConversationSession",
      id: req.params.id
    });
  }
}
