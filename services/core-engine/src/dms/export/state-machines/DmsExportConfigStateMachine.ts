export type DmsExportConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportConfigStateMachine {
  private allowedTransitions: Record<DmsExportConfigState, DmsExportConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportConfigState, to: DmsExportConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportConfigState, to: DmsExportConfigState): DmsExportConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportConfig: " + from + " -> " + to);
    }
    return to;
  }
}
