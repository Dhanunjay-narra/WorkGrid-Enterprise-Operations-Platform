export type BiAnomaliesNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesNodeStateMachine {
  private allowedTransitions: Record<BiAnomaliesNodeState, BiAnomaliesNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesNodeState, to: BiAnomaliesNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesNodeState, to: BiAnomaliesNodeState): BiAnomaliesNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesNode: " + from + " -> " + to);
    }
    return to;
  }
}
