export type BiWidgetsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsSummaryStateMachine {
  private allowedTransitions: Record<BiWidgetsSummaryState, BiWidgetsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsSummaryState, to: BiWidgetsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsSummaryState, to: BiWidgetsSummaryState): BiWidgetsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
