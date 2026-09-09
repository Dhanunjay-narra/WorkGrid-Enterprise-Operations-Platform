export type IntWebhooksProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksProfileStateMachine {
  private allowedTransitions: Record<IntWebhooksProfileState, IntWebhooksProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksProfileState, to: IntWebhooksProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksProfileState, to: IntWebhooksProfileState): IntWebhooksProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksProfile: " + from + " -> " + to);
    }
    return to;
  }
}
