export type DmsExportItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportItemStateMachine {
  private allowedTransitions: Record<DmsExportItemState, DmsExportItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportItemState, to: DmsExportItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportItemState, to: DmsExportItemState): DmsExportItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportItem: " + from + " -> " + to);
    }
    return to;
  }
}
