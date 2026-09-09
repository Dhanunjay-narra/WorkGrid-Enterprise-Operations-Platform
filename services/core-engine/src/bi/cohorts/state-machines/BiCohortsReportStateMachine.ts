export type BiCohortsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsReportStateMachine {
  private allowedTransitions: Record<BiCohortsReportState, BiCohortsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsReportState, to: BiCohortsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsReportState, to: BiCohortsReportState): BiCohortsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsReport: " + from + " -> " + to);
    }
    return to;
  }
}
