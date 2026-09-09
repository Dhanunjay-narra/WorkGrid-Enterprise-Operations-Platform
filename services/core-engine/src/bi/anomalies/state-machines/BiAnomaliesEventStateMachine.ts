export type BiAnomaliesEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesEventStateMachine {
  private allowedTransitions: Record<BiAnomaliesEventState, BiAnomaliesEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesEventState, to: BiAnomaliesEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesEventState, to: BiAnomaliesEventState): BiAnomaliesEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesEvent: " + from + " -> " + to);
    }
    return to;
  }
}
