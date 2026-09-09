export type AbacReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacReportStateMachine {
  private allowedTransitions: Record<AbacReportState, AbacReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacReportState, to: AbacReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacReportState, to: AbacReportState): AbacReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacReport: " + from + " -> " + to);
    }
    return to;
  }
}
