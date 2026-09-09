export type RbacReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacReportStateMachine {
  private allowedTransitions: Record<RbacReportState, RbacReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacReportState, to: RbacReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacReportState, to: RbacReportState): RbacReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacReport: " + from + " -> " + to);
    }
    return to;
  }
}
