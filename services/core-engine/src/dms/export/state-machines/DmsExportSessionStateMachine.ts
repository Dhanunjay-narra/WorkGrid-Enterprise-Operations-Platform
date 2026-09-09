export type DmsExportSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportSessionStateMachine {
  private allowedTransitions: Record<DmsExportSessionState, DmsExportSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportSessionState, to: DmsExportSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportSessionState, to: DmsExportSessionState): DmsExportSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportSession: " + from + " -> " + to);
    }
    return to;
  }
}
