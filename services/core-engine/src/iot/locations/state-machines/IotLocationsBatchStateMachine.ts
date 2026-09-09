export type IotLocationsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsBatchStateMachine {
  private allowedTransitions: Record<IotLocationsBatchState, IotLocationsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsBatchState, to: IotLocationsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsBatchState, to: IotLocationsBatchState): IotLocationsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
