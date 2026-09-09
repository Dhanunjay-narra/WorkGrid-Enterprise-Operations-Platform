export type BiQueriesPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesPayloadStateMachine {
  private allowedTransitions: Record<BiQueriesPayloadState, BiQueriesPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesPayloadState, to: BiQueriesPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesPayloadState, to: BiQueriesPayloadState): BiQueriesPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesPayload: " + from + " -> " + to);
    }
    return to;
  }
}
