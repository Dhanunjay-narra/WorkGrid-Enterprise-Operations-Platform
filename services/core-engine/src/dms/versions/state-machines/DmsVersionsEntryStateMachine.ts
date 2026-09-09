export type DmsVersionsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsEntryStateMachine {
  private allowedTransitions: Record<DmsVersionsEntryState, DmsVersionsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsEntryState, to: DmsVersionsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsEntryState, to: DmsVersionsEntryState): DmsVersionsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
