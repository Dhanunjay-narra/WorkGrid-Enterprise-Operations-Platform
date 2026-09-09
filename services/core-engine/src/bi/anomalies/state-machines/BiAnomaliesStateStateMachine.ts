export type BiAnomaliesStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesStateStateMachine {
  private allowedTransitions: Record<BiAnomaliesStateState, BiAnomaliesStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesStateState, to: BiAnomaliesStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesStateState, to: BiAnomaliesStateState): BiAnomaliesStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesState: " + from + " -> " + to);
    }
    return to;
  }
}
