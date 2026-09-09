export type IntWebhooksScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksScheduleStateMachine {
  private allowedTransitions: Record<IntWebhooksScheduleState, IntWebhooksScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksScheduleState, to: IntWebhooksScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksScheduleState, to: IntWebhooksScheduleState): IntWebhooksScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
