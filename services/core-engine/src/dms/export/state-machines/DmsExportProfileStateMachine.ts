export type DmsExportProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportProfileStateMachine {
  private allowedTransitions: Record<DmsExportProfileState, DmsExportProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportProfileState, to: DmsExportProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportProfileState, to: DmsExportProfileState): DmsExportProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportProfile: " + from + " -> " + to);
    }
    return to;
  }
}
