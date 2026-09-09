export type DmsFilesEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesEntryStateMachine {
  private allowedTransitions: Record<DmsFilesEntryState, DmsFilesEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesEntryState, to: DmsFilesEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesEntryState, to: DmsFilesEntryState): DmsFilesEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesEntry: " + from + " -> " + to);
    }
    return to;
  }
}
