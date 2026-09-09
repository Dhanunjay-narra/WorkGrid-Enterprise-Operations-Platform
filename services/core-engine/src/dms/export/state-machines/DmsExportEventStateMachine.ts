export type DmsExportEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportEventStateMachine {
  private allowedTransitions: Record<DmsExportEventState, DmsExportEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportEventState, to: DmsExportEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportEventState, to: DmsExportEventState): DmsExportEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportEvent: " + from + " -> " + to);
    }
    return to;
  }
}
