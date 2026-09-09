export type DmsFilesMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesMetricStateMachine {
  private allowedTransitions: Record<DmsFilesMetricState, DmsFilesMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesMetricState, to: DmsFilesMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesMetricState, to: DmsFilesMetricState): DmsFilesMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesMetric: " + from + " -> " + to);
    }
    return to;
  }
}
