export type DmsSignaturesEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesEventStateMachine {
  private allowedTransitions: Record<DmsSignaturesEventState, DmsSignaturesEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesEventState, to: DmsSignaturesEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesEventState, to: DmsSignaturesEventState): DmsSignaturesEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesEvent: " + from + " -> " + to);
    }
    return to;
  }
}
