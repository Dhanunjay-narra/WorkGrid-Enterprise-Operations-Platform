export type BiExportsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsSummaryStateMachine {
  private allowedTransitions: Record<BiExportsSummaryState, BiExportsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsSummaryState, to: BiExportsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsSummaryState, to: BiExportsSummaryState): BiExportsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
