export type CommWebhooksProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksProfileStateMachine {
  private allowedTransitions: Record<CommWebhooksProfileState, CommWebhooksProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksProfileState, to: CommWebhooksProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksProfileState, to: CommWebhooksProfileState): CommWebhooksProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksProfile: " + from + " -> " + to);
    }
    return to;
  }
}
