export type DmsExportStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportStateStateMachine {
  private allowedTransitions: Record<DmsExportStateState, DmsExportStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportStateState, to: DmsExportStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportStateState, to: DmsExportStateState): DmsExportStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportState: " + from + " -> " + to);
    }
    return to;
  }
}
