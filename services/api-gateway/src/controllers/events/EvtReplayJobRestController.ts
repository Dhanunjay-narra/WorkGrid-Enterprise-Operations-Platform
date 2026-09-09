export class EvtReplayJobRestController {
  public async create(req: any, res: any): Promise<void> {
    res.status(201).json({
      success: true,
      entity: "EvtReplayJob",
      id: "eve_rest_" + Math.random().toString(36).substring(2, 9),
      payload: req.body
    });
  }

  public async get(req: any, res: any): Promise<void> {
    res.json({
      success: true,
      entity: "EvtReplayJob",
      id: req.params.id
    });
  }
}
