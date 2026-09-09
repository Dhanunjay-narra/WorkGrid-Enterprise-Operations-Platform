export type DmsFoldersMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersMetricStateMachine {
  private allowedTransitions: Record<DmsFoldersMetricState, DmsFoldersMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersMetricState, to: DmsFoldersMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersMetricState, to: DmsFoldersMetricState): DmsFoldersMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersMetric: " + from + " -> " + to);
    }
    return to;
  }
}
