export type BiWidgetsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsMappingStateMachine {
  private allowedTransitions: Record<BiWidgetsMappingState, BiWidgetsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsMappingState, to: BiWidgetsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsMappingState, to: BiWidgetsMappingState): BiWidgetsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
