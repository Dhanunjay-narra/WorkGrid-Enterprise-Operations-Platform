export type BiAnomaliesConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesConfigStateMachine {
  private allowedTransitions: Record<BiAnomaliesConfigState, BiAnomaliesConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesConfigState, to: BiAnomaliesConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesConfigState, to: BiAnomaliesConfigState): BiAnomaliesConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesConfig: " + from + " -> " + to);
    }
    return to;
  }
}
