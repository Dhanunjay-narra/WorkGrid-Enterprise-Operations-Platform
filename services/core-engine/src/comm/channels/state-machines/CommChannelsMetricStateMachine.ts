export type CommChannelsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsMetricStateMachine {
  private allowedTransitions: Record<CommChannelsMetricState, CommChannelsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsMetricState, to: CommChannelsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsMetricState, to: CommChannelsMetricState): CommChannelsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
