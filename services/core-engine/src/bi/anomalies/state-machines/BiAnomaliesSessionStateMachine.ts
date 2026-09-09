export type BiAnomaliesSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesSessionStateMachine {
  private allowedTransitions: Record<BiAnomaliesSessionState, BiAnomaliesSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesSessionState, to: BiAnomaliesSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesSessionState, to: BiAnomaliesSessionState): BiAnomaliesSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesSession: " + from + " -> " + to);
    }
    return to;
  }
}
