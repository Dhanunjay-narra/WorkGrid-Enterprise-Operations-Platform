export type DmsChunksReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksReportStateMachine {
  private allowedTransitions: Record<DmsChunksReportState, DmsChunksReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksReportState, to: DmsChunksReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksReportState, to: DmsChunksReportState): DmsChunksReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksReport: " + from + " -> " + to);
    }
    return to;
  }
}
