export type BiForecastsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsNodeStateMachine {
  private allowedTransitions: Record<BiForecastsNodeState, BiForecastsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsNodeState, to: BiForecastsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsNodeState, to: BiForecastsNodeState): BiForecastsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsNode: " + from + " -> " + to);
    }
    return to;
  }
}
