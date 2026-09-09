export type DmsExportMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportMetricStateMachine {
  private allowedTransitions: Record<DmsExportMetricState, DmsExportMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportMetricState, to: DmsExportMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportMetricState, to: DmsExportMetricState): DmsExportMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportMetric: " + from + " -> " + to);
    }
    return to;
  }
}
