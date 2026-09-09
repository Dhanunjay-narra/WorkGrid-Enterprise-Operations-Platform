export type DmsVersionsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsSessionStateMachine {
  private allowedTransitions: Record<DmsVersionsSessionState, DmsVersionsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsSessionState, to: DmsVersionsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsSessionState, to: DmsVersionsSessionState): DmsVersionsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsSession: " + from + " -> " + to);
    }
    return to;
  }
}
