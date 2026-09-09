export type BiAnomaliesItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesItemStateMachine {
  private allowedTransitions: Record<BiAnomaliesItemState, BiAnomaliesItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesItemState, to: BiAnomaliesItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesItemState, to: BiAnomaliesItemState): BiAnomaliesItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesItem: " + from + " -> " + to);
    }
    return to;
  }
}
