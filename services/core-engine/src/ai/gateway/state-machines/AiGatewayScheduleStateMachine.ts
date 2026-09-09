export type AiGatewayScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayScheduleStateMachine {
  private allowedTransitions: Record<AiGatewayScheduleState, AiGatewayScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayScheduleState, to: AiGatewayScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayScheduleState, to: AiGatewayScheduleState): AiGatewayScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewaySchedule: " + from + " -> " + to);
    }
    return to;
  }
}
