export type DmsFilesReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesReportStateMachine {
  private allowedTransitions: Record<DmsFilesReportState, DmsFilesReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesReportState, to: DmsFilesReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesReportState, to: DmsFilesReportState): DmsFilesReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesReport: " + from + " -> " + to);
    }
    return to;
  }
}
