import { IdDeviceService } from "../services/IdDeviceService";

export class IdDeviceController {
  private service = new IdDeviceService();

  public async handleCreate(req: any, res: any): Promise<void> {
    try {
      const result = this.service.create(req.body);
      res.status(201).json({ success: true, data: result });
    } catch (e: any) {
      res.status(400).json({ success: false, error: e.message });
    }
  }

  public async handleGet(req: any, res: any): Promise<void> {
    const item = this.service.findById(req.params.id);
    if (!item) {
      res.status(404).json({ success: false, error: "Not Found" });
      return;
    }
    res.json({ success: true, data: item });
  }
}
