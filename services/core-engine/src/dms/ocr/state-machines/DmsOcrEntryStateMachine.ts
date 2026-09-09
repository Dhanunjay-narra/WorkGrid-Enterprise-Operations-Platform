export type DmsOcrEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrEntryStateMachine {
  private allowedTransitions: Record<DmsOcrEntryState, DmsOcrEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrEntryState, to: DmsOcrEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrEntryState, to: DmsOcrEntryState): DmsOcrEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrEntry: " + from + " -> " + to);
    }
    return to;
  }
}
