export type IotCommandsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsItemStateMachine {
  private allowedTransitions: Record<IotCommandsItemState, IotCommandsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsItemState, to: IotCommandsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsItemState, to: IotCommandsItemState): IotCommandsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsItem: " + from + " -> " + to);
    }
    return to;
  }
}
