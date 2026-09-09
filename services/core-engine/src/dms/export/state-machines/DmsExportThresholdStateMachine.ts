export type DmsExportThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportThresholdStateMachine {
  private allowedTransitions: Record<DmsExportThresholdState, DmsExportThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportThresholdState, to: DmsExportThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportThresholdState, to: DmsExportThresholdState): DmsExportThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
