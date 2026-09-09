export type DmsSignaturesSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesSessionStateMachine {
  private allowedTransitions: Record<DmsSignaturesSessionState, DmsSignaturesSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesSessionState, to: DmsSignaturesSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesSessionState, to: DmsSignaturesSessionState): DmsSignaturesSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesSession: " + from + " -> " + to);
    }
    return to;
  }
}
