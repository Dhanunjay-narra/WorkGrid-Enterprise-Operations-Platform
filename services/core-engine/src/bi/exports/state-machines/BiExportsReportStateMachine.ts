export type BiExportsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsReportStateMachine {
  private allowedTransitions: Record<BiExportsReportState, BiExportsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsReportState, to: BiExportsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsReportState, to: BiExportsReportState): BiExportsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsReport: " + from + " -> " + to);
    }
    return to;
  }
}
