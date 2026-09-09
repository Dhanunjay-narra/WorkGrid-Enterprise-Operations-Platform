export type CommWebhooksScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksScheduleStateMachine {
  private allowedTransitions: Record<CommWebhooksScheduleState, CommWebhooksScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksScheduleState, to: CommWebhooksScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksScheduleState, to: CommWebhooksScheduleState): CommWebhooksScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
