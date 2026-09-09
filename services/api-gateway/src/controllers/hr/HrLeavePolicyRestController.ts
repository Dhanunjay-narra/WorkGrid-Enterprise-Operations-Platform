export class HrLeavePolicyRestController {
  public async create(req: any, res: any): Promise<void> {
    res.status(201).json({
      success: true,
      entity: "HrLeavePolicy",
      id: "hr_rest_" + Math.random().toString(36).substring(2, 9),
      payload: req.body
    });
  }

  public async get(req: any, res: any): Promise<void> {
    res.json({
      success: true,
      entity: "HrLeavePolicy",
      id: req.params.id
    });
  }
}
