import { DmsOcrSummaryService } from "../../../../core-engine/src/dms/ocr/services/DmsOcrSummaryService";

export class DmsOcrSummaryController {
  private service = new DmsOcrSummaryService();

  public async create(req: any, res: any): Promise<void> {
    try {
      const result = this.service.create(req.body);
      res.status(201).json({ success: true, data: result });
    } catch (err: any) {
      res.status(400).json({ success: false, error: err.message });
    }
  }

  public async get(req: any, res: any): Promise<void> {
    const item = this.service.findById(req.params.id);
    if (!item) {
      res.status(404).json({ success: false, error: "Resource not found" });
      return;
    }
    res.json({ success: true, data: item });
  }

  public async list(req: any, res: any): Promise<void> {
    const tenantId = req.headers["x-tenant-id"] || "default-tenant";
    const result = this.service.list(tenantId, Number(req.query.limit) || 20);
    res.json({ success: true, data: result.items, total: result.total });
  }
}
