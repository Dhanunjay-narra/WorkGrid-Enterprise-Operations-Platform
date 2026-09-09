export type DmsExportEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportEntryStateMachine {
  private allowedTransitions: Record<DmsExportEntryState, DmsExportEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportEntryState, to: DmsExportEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportEntryState, to: DmsExportEntryState): DmsExportEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportEntry: " + from + " -> " + to);
    }
    return to;
  }
}
