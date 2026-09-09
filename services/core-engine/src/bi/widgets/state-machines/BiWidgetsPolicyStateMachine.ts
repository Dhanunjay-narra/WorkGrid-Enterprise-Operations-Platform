export type BiWidgetsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsPolicyStateMachine {
  private allowedTransitions: Record<BiWidgetsPolicyState, BiWidgetsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsPolicyState, to: BiWidgetsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsPolicyState, to: BiWidgetsPolicyState): BiWidgetsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
