export class WfApprovalTaskRestController {
  public async create(req: any, res: any): Promise<void> {
    res.status(201).json({
      success: true,
      entity: "WfApprovalTask",
      id: "wor_rest_" + Math.random().toString(36).substring(2, 9),
      payload: req.body
    });
  }

  public async get(req: any, res: any): Promise<void> {
    res.json({
      success: true,
      entity: "WfApprovalTask",
      id: req.params.id
    });
  }
}
