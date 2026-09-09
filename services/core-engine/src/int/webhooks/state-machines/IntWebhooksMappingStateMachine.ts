export type IntWebhooksMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksMappingStateMachine {
  private allowedTransitions: Record<IntWebhooksMappingState, IntWebhooksMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksMappingState, to: IntWebhooksMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksMappingState, to: IntWebhooksMappingState): IntWebhooksMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksMapping: " + from + " -> " + to);
    }
    return to;
  }
}
