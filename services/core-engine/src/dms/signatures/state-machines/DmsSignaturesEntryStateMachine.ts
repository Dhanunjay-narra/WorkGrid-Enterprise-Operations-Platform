export type DmsSignaturesEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesEntryStateMachine {
  private allowedTransitions: Record<DmsSignaturesEntryState, DmsSignaturesEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesEntryState, to: DmsSignaturesEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesEntryState, to: DmsSignaturesEntryState): DmsSignaturesEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesEntry: " + from + " -> " + to);
    }
    return to;
  }
}
